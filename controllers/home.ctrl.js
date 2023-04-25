export const  home = (req,res,next) => {
    res.render('index', {
        title: 'Weather',
        name: 'eslam'
    })
}