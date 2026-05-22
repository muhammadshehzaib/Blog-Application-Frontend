"use client";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

interface Snapshot {
  health: { mongodb: "up" | "down"; redis: "up" | "down" };
  process: {
    uptimeSeconds: number;
    nodeVersion: string;
    memoryMB: { heapUsed: number; heapTotal: number; rss: number };
  };
  metrics: {
    commentsCreated: number;
    reactionsChanged: { create: number; update: number; delete: number };
  };
  mailQueue: {
    waiting: number;
    active: number;
    completed: number;
    failed: number;
    delayed: number;
  };
}

const REFRESH_MS = 5000;

const formatUptime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
};

const StatusDot = ({ up }: { up: boolean }) => (
  <span
    className={`inline-block w-2 h-2 rounded-full mr-2 ${
      up ? "bg-emerald-400" : "bg-red-500"
    }`}
  />
);

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border border-rule bg-ink-2 p-6">
    <div className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 mb-4">
      §  {title}
    </div>
    {children}
  </div>
);

const Stat = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between py-1.5 border-b border-rule/40 last:border-b-0">
    <span className="font-mono text-sm text-paper-3">{label}</span>
    <span className="font-mono text-sm text-paper">{value}</span>
  </div>
);

export default function ObservabilityDashboard() {
  const { token } = useAuth();
  const [data, setData] = useState<Snapshot | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [reindexing, setReindexing] = useState(false);
  const [reindexResult, setReindexResult] = useState<string | null>(null);

  const handleReindex = async () => {
    if (!token) return;
    setReindexing(true);
    setReindexResult(null);
    try {
      const res = await fetch(`${process.env.DEPLOYMENTLINK}/blogs/reindex`, {
        method: "POST",
        headers: { authorization: `bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setReindexResult(`✓ indexed ${json.indexed} blogs`);
    } catch (e: any) {
      setReindexResult(`✗ ${e.message}`);
    } finally {
      setReindexing(false);
    }
  };

  useEffect(() => {
    if (!token) return;

    const fetchSnapshot = async () => {
      try {
        const res = await fetch(
          `${process.env.DEPLOYMENTLINK}/admin/dashboard`,
          {
            headers: { authorization: `bearer ${token}` },
          },
        );
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json: Snapshot = await res.json();
        setData(json);
        setError(null);
        setLastUpdated(new Date());
      } catch (e: any) {
        setError(e.message);
      }
    };

    fetchSnapshot();
    const id = setInterval(fetchSnapshot, REFRESH_MS);
    return () => clearInterval(id);
  }, [token]);

  if (!token) {
    return (
      <div className="font-mono text-sm text-paper-3 p-10">
        › authentication required
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-mono text-sm text-red-400 p-10">
        ✗ failed to load: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="font-mono text-sm text-paper-3 p-10 animate-pulse">
        › loading observability data…
      </div>
    );
  }

  const allHealthy =
    data.health.mongodb === "up" && data.health.redis === "up";
  const totalReactions =
    data.metrics.reactionsChanged.create +
    data.metrics.reactionsChanged.update +
    data.metrics.reactionsChanged.delete;

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-6">
      <header className="flex items-baseline gap-4 pb-4 border-b border-rule">
        <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
          §
        </span>
        <h1 className="font-display text-3xl text-paper">Observability</h1>
        <span className="flex-1 border-t border-rule translate-y-[-2px]" />
        <span className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
          {lastUpdated && (
            <>
              last sync: {lastUpdated.toLocaleTimeString()}{" "}
              <span className="text-accent">●</span>
            </>
          )}
        </span>
      </header>

      <div className="flex flex-wrap gap-3 font-mono text-xs">
        <a
          href="/admin"
          className="border border-rule px-4 py-2 text-paper-2 hover:text-paper hover:border-accent transition-colors"
        >
          ▸ blog moderation
        </a>
        <a
          href="/admin/users"
          className="border border-rule px-4 py-2 text-paper-2 hover:text-paper hover:border-accent transition-colors"
        >
          ▸ user roles
        </a>
        <a
          href="/admin/comments"
          className="border border-rule px-4 py-2 text-paper-2 hover:text-paper hover:border-accent transition-colors"
        >
          ▸ comments moderation
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="System health">
          <div className="space-y-3">
            <div className="flex items-center font-mono text-sm">
              <StatusDot up={data.health.mongodb === "up"} />
              <span className="text-paper-3 mr-2">mongodb:</span>
              <span className="text-paper">{data.health.mongodb}</span>
            </div>
            <div className="flex items-center font-mono text-sm">
              <StatusDot up={data.health.redis === "up"} />
              <span className="text-paper-3 mr-2">redis:</span>
              <span className="text-paper">{data.health.redis}</span>
            </div>
            <div className="mt-4 pt-3 border-t border-rule/40">
              <div
                className={`font-mono text-[0.7rem] tracking-label uppercase ${
                  allHealthy ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {allHealthy ? "▸ all systems nominal" : "▸ degraded"}
              </div>
            </div>
          </div>
        </Card>

        <Card title="Process">
          <Stat label="uptime" value={formatUptime(data.process.uptimeSeconds)} />
          <Stat label="node" value={data.process.nodeVersion} />
          <Stat
            label="heap"
            value={`${data.process.memoryMB.heapUsed} / ${data.process.memoryMB.heapTotal} MB`}
          />
          <Stat label="rss" value={`${data.process.memoryMB.rss} MB`} />
        </Card>

        <Card title="Mail queue">
          <Stat label="waiting" value={data.mailQueue.waiting} />
          <Stat label="active" value={data.mailQueue.active} />
          <Stat label="completed" value={data.mailQueue.completed} />
          <Stat label="failed" value={data.mailQueue.failed} />
          <Stat label="delayed" value={data.mailQueue.delayed} />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Comments counter">
          <div className="font-display text-5xl text-paper">
            {data.metrics.commentsCreated.toLocaleString()}
          </div>
          <div className="mt-2 font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
            total comments since boot
          </div>
        </Card>

        <Card title="Reactions counter">
          <div className="font-display text-5xl text-paper">
            {totalReactions.toLocaleString()}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-xs">
            <div>
              <div className="text-paper-3">create</div>
              <div className="text-paper">
                {data.metrics.reactionsChanged.create}
              </div>
            </div>
            <div>
              <div className="text-paper-3">update</div>
              <div className="text-paper">
                {data.metrics.reactionsChanged.update}
              </div>
            </div>
            <div>
              <div className="text-paper-3">delete</div>
              <div className="text-paper">
                {data.metrics.reactionsChanged.delete}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Vector search index">
        <div className="font-mono text-xs text-paper-3 space-y-3 leading-relaxed">
          <p>
            Re-embed every blog into Qdrant. Run this once after adding the
            feature, or to backfill posts created while the indexer was down.
          </p>
          <button
            type="button"
            onClick={handleReindex}
            disabled={reindexing}
            className="inline-flex items-center gap-2 border border-rule text-paper-2 px-4 py-2 hover:border-accent hover:text-paper transition-colors disabled:opacity-50"
          >
            <span className="text-accent">▸</span>
            {reindexing ? "reindexing…" : "Reindex all blogs"}
          </button>
          {reindexResult && (
            <p
              className={
                reindexResult.startsWith("✓")
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            >
              {reindexResult}
            </p>
          )}
        </div>
      </Card>

      <Card title="External tooling">
        <div className="font-mono text-xs text-paper-3 space-y-2 leading-relaxed">
          <p>
            ▸ raw metrics:{" "}
            <a
              className="text-accent hover:underline"
              href={`${process.env.DEPLOYMENTLINK}/metrics`}
              target="_blank"
              rel="noreferrer"
            >
              /metrics
            </a>{" "}
            (scrape with Prometheus)
          </p>
          <p>
            ▸ liveness:{" "}
            <a
              className="text-accent hover:underline"
              href={`${process.env.DEPLOYMENTLINK}/health/live`}
              target="_blank"
              rel="noreferrer"
            >
              /health/live
            </a>{" "}
            · readiness:{" "}
            <a
              className="text-accent hover:underline"
              href={`${process.env.DEPLOYMENTLINK}/health/ready`}
              target="_blank"
              rel="noreferrer"
            >
              /health/ready
            </a>
          </p>
          <p className="pt-2 text-paper-3/70">
            // time-series graphs &amp; traces live in external tools (Grafana,
            Honeycomb, Jaeger) — not reinvented here
          </p>
        </div>
      </Card>

      <div className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 text-center pt-4">
        ▸ refreshing every {REFRESH_MS / 1000}s
      </div>
    </div>
  );
}
