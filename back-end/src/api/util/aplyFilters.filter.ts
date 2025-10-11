import { SelectQueryBuilder, ObjectLiteral } from 'typeorm';

export default function applyFilters<T extends ObjectLiteral>(
  query: SelectQueryBuilder<T>,
  filters: Partial<Record<keyof T, unknown>>,
  alias: string,
): void {
  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== null && value !== '') {
      query.andWhere(`${alias}.${key} = :${key}`, { [key]: value });
    }
  }
}
