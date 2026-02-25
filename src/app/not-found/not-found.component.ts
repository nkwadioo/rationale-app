import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 blueprint-bg">
      <div class="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div class="flex items-center gap-3 mb-12">
          <img src="/images/logo.svg" alt="logo" class="h-[40px]" srcset="">
          <div>
            <p class="text-xl font-bold tracking-tight">RATIONALE</p>
            <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Built Environment Consultants</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="space-y-6">
            <span class="inline-block px-4 py-1 bg-orange-500 text-white text-xs font-bold tracking-widest skew-box">ERROR</span>
            <h1 class="text-6xl md:text-8xl font-bold leading-none">404</h1>
            <h2 class="text-2xl md:text-4xl font-bold">PAGE NOT FOUND</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              The page you requested is unavailable. Return to the main site to continue exploring our engineering and construction services.
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
              <a
                routerLink="/"
                class="px-7 py-3 bg-orange-500 text-white font-bold tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2"
              >
                GO TO HOME
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          <div class="relative h-90 md:h-115 border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden">
            <img
              src="/images/slider/11.jpg"
              alt="Construction and engineering visual"
              class="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <p class="text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold mb-2">Navigation</p>
              <p class="text-white text-2xl font-bold">Return to Homepage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}