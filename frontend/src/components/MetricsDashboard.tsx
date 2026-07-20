import MetricCard from "./MetricCard";

interface RepoMetrics {
  stars?: number | null;
  forks?: number | null;
  watchers?: number | null;
  issues?: number | null;
  size?: number | null;
  visibility?: string | null;
  defaultBranch?: string | null;
  updatedAt?: string | null;
}

interface Props {
  repo: RepoMetrics;
}

const formatCount = (value?: number | null) => {
  const normalized = typeof value === "number" && Number.isFinite(value) ? value : 0;
  return normalized.toLocaleString();
};

const formatSize = (value?: number | null) => {
  const normalized = typeof value === "number" && Number.isFinite(value) ? value : 0;
  return normalized > 1024
    ? `${(normalized / 1024).toFixed(1)} MB`
    : `${normalized} KB`;
};

const formatDate = (value?: string | null) => {
  if (!value) return "Unknown";

  const parsedDate = new Date(value);
  return Number.isNaN(parsedDate.getTime()) ? "Unknown" : parsedDate.toLocaleDateString();
};

export default function MetricsDashboard({
  repo,
}: Props) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        📊 Repository Metrics
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard icon="⭐" title="Stars" value={formatCount(repo.stars)} />
        <MetricCard icon="🍴" title="Forks" value={formatCount(repo.forks)} />
        <MetricCard icon="👀" title="Watchers" value={formatCount(repo.watchers)} />
        <MetricCard icon="🐞" title="Open Issues" value={formatCount(repo.issues)} />
        <MetricCard icon="📦" title="Repository Size" value={formatSize(repo.size)} />
        <MetricCard icon="🌍" title="Visibility" value={repo.visibility || "Unknown"} />
        <MetricCard icon="🌿" title="Default Branch" value={repo.defaultBranch || "Unknown"} />
        <MetricCard icon="📅" title="Last Updated" value={formatDate(repo.updatedAt)} />
      </div>
    </div>
  );
}