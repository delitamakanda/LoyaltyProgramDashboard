export const formatCurrency = (value: number, decimal = false) => {
    return value.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: decimal? 2 : 0,
            maximumFractionDigits: decimal? 2 : 0,
        }
    )
}
