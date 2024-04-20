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
        // /_(g|l)t(e?)?/

        // console.log(/_(g|l)t(e?)?/.test('Monster_gt'));

        const features = ['page', 'limit', 'sort', 'skip', 'filter', 'fields']
        let queryClone = { ...this.query };
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
                    value = value.split('-')

                    value = value.map(el => el * 1).sort((a, b) => a - b)

                    Object.assign(rangeFilters, {
                        [key]: { $lte: value[1], $gte: value[0] }
                    })
                    Object.assign(filters, {
                        $and: [rangeFilters]
                    })
                }
            })
        }

        // let comperingFilter = Object.keys(queryClone).filter(item => { item.includes("_g) })
        // if (comperingFilter.length != 0)
        // {
        //     comperingFilter.forEach
        //     console.log(`filters inside 😂`, Object.assign(filters, { name: "Mother " }));

        // }

        // Object.entries(queryClone).forEach(([k, v]) =>
        // {
        //     if (/^[a-zA-Z]+$/.test(k))
        //     {
        //         Object.assign(filters, { [k]: v })
        //     }
        // })



        // if(/^[a-zA-Z]+$/.test())

        return filters

    }

    pagination()
    {
        if (this.query.page)
        {
            let page = this.query.page || 1


        }

    }
}


module.exports = ApiFeatures 