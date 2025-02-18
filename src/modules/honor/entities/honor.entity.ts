export class HonorEntity {
  id: number;
  title: string;

  constructor(partial: Partial<HonorEntity>) {
    Object.assign(this, partial);
  }
}
