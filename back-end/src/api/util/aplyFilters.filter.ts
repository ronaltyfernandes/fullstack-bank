import { SelectQueryBuilder, ObjectLiteral } from 'typeorm';

export default function applyFilters<T extends ObjectLiteral, F extends object>(
  query: SelectQueryBuilder<T>,
  filters: F,
  alias: string,
): void {
  const { minValue, maxValue, startDate, endDate, name, ...otherFilters } = filters as Record<
    string,
    unknown
  >;

  if (minValue !== undefined) {
    query.andWhere(`${alias}.value >= :minValue`, { minValue });
  }

  if (maxValue !== undefined) {
    query.andWhere(`${alias}.value <= :maxValue`, { maxValue });
  }

  if (startDate !== undefined) {
    query.andWhere(`${alias}.date >= :startDate`, { startDate });
  }

  if (endDate !== undefined) {
    query.andWhere(`${alias}.date <= :endDate`, { endDate });
  }

  if (typeof name === 'string' && name.trim() !== '') {
    query.andWhere(`${alias}.name ILIKE :name`, { name: `%${name}%` });
  }

  const allowedFields = ['paymentMethod', 'paymentStatus', 'incomeExpense', 'value', 'date'];

  for (const [key, value] of Object.entries(otherFilters)) {
    if (!allowedFields.includes(key)) continue;

    if (value === undefined || value === null || value === '') continue;

    query.andWhere(`${alias}.${key} = :${key}`, {
      [key]: value,
    });
  }
}
