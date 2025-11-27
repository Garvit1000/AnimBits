import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AnimatedLogo } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <AnimatedLogo className="size-6" />
          <span className="font-bold">AnimBits</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}