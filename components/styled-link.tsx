import { cn } from '@/lib/utils';

interface StyledLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: string;
}

export default function StyledLink({
  className,
  children,
  ...props
}: StyledLinkProps) {
  return (
    <a
      className={cn(
        'underline decoration-gray-500 underline-offset-4 hover:decoration-gray-700 hover:decoration-2',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
