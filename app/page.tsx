'use client';

import React from 'react';
import useSWR from 'swr';
import { Github, Headphones, Mail, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/card';
import StyledLink from '@/components/styled-link';

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
}

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/spotify-playing', fetcher, {
    refreshInterval: 1000 * 60,
  });

  return (
    <main className="mx-auto max-w-2xl px-4 pb-4 pt-14">
      <h1 className="text-3xl font-bold tracking-tight">Lauren Xie</h1>

      <h2 className="mt-4 font-medium tracking-tight md:mt-6">
        Web Developer based in Toronto, Canada
      </h2>

      <div className="mx-auto mt-10 grid max-w-md gap-6 sm:gap-8">
        <Card icon={<Github />} title="GitHub">
          <CardContent>
            <StyledLink
              href="https://github.com/lrnxie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lrnxie
            </StyledLink>
          </CardContent>
        </Card>

        <Card icon={<Twitter />} title="Twitter">
          <CardContent>
            <StyledLink
              href="https://twitter.com/lrnxie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lrnxie
            </StyledLink>
          </CardContent>
        </Card>

        <Card icon={<Mail />} title="Email">
          <CardContent>
            <StyledLink href="mailto:hello@lrnxie.com">
              hello@lrnxie.com
            </StyledLink>
          </CardContent>
        </Card>

        <Card
          icon={<Headphones />}
          title="Spotify now playing"
          className={cn(!error && data?.isPlaying && 'hover:justify-start')}
        >
          <CardContent>
            {isLoading ? (
              'Loading Spotify now playing...'
            ) : !error && data?.isPlaying ? (
              <div className="flex items-center gap-x-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.albumImage}
                  alt={`Album image of song ${data.title} by ${data.artist}`}
                  className="size-16 shadow-sm"
                />
                <div className="flex-1">
                  <StyledLink
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    {data.title}
                  </StyledLink>
                  <p className="text-sm text-neutral-500">{data.artist}</p>
                </div>
              </div>
            ) : (
              'Not Playing'
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
