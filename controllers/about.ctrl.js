export const  about = (req,res,next) => {
    res.render('about', {
        title: 'About Me',
        name: 'eslam'
    })
}