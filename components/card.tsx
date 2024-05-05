import { cn } from '@/lib/utils';

export function Card({
  icon,
  title,
  className,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'group flex h-24 items-center justify-center rounded-xl border-2 border-neutral-900 bg-white p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-2xl',
        className
      )}
    >
      <div className="group-hover:hidden">
        {icon}
        <span className="sr-only">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('hidden group-hover:block', className)}>{children}</div>
  );
}
