export interface Subscription {
  readonly id: string;
  readonly title: string;
  readonly plan: string;
  readonly status: 'active' | 'pending' | 'inactive';
  readonly locale: string;
  readonly createdAt: number;
  readonly logoURL: string;
  readonly periodUnit: 'day' | 'week' | 'month' | 'year';
  readonly period: number;
  readonly termStart: number;
  readonly termEnd: number;
  readonly currency: string;
  readonly amount: number;
}

export type Subscriptions = Array<Subscription>;
