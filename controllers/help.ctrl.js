export const  help = (req,res,next) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'eslam'
    })
};

export const helpError=(req, res, next)=>{
    res.render('404', {
        title: '404',
        name: 'eslam',
        errorMessage: 'Help article not found.'
    })
}