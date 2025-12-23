export default function VideoVimeoCardSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {/* Video placeholder */}
      <div className="aspect-video bg-gray-800 rounded-xl" />

      {/* Title */}
      <div className="h-4 bg-gray-700 rounded w-3/4" />

      {/* Subtitles */}
      <div className="h-3 bg-gray-700 rounded w-1/2" />
      <div className="h-3 bg-gray-700 rounded w-2/3" />
    </div>
  );
}
