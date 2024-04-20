class ApiFeatures
{
    constructor(query)
    {
        this.query = query

    }

    filter()
    {
        // Filter with single words
        // Filter with ranges between
        // Filter with gte and lte
        // Filter with GT and LT

        const features = ['page', 'limit', 'sort', 'skip', 'filter', 'fields']
        let queryClone = this.query;
        let filters = {}

        // {page:3,sold : 4, prace : 15-20}
        features.filter(item => delete queryClone[item])


        // {sold : 4}
        //Check if there are any - in query
        let range = Object.values(queryClone).filter(item => item.includes('-'))

        // If found
        // price=60000-20000&quantity=11-16&priceAfterDiscount=50000-60000&
        if (range.length != 0)
        {
            let rangeFilters = {};
            Object.entries(queryClone).forEach(([key, value]) =>
            {
                if (value.includes('-'))
                {
                    value = value.split('-').map(el => el * 1).sort((a, b) => a - b)

                    Object.assign(rangeFilters, {
                        [key]: { $lt: value[1], $gt: value[0] }
                    })
                    console.log("rangeFilters", rangeFilters);
                    Object.assign(filters, {
                        $and: [rangeFilters]
                    })
                }
            })
        }

        console.log(`Filters 😂😂`, filters);

        return filters

    }


}


module.exports = ApiFeatures 