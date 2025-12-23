import VideoVimeoCardSkeleton from './VideoVimeoCardSkeleton';

export default function VideoGridSkeleton() {
  return (
    <section className="w-full bg-black px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <VideoVimeoCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
