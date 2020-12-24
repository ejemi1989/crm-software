<TextField
 id="multiline-flexible"
 label="About"
 multiline
 rows="2"
 value={values.about}
 onChange={handleChange('about')}
 />

 <input accept="image/*" type="file"
 onChange={handleChange('photo')} 
 style={{display:'none'}} 
 id="icon-button-file" />

 <label htmlFor="icon-button-file">
 <Button variant="contained" color="default" component="span">
 Upload <FileUpload/>
 </Button>
</label>

<span className={classes.filename}>
 {values.photo ? values.photo.name : ''}
</span>


const handleChange = name => event => {
    const value = name === 'photo'
     ? event.target.files[0]
     : event.target.value
     setValues({...values, [name]: value })
    }

    const clickSubmit = () => {
        let userData = new FormData()
        values.name && userData.append('name', values.name)
        values.email && userData.append('email', values.email)
        values.passoword && userData.append('passoword', values.passoword)
        values.about && userData.append('about', values.about)
        values.photo && userData.append('photo', values.photo)
        ...
       }

       update({
        userId: match.params.userId
        }, {
        t: jwt.token
        }, userData).then((data) => {
        if (data && data.error) {
        setValues({...values, error: data.error})
        } else {
        setValues({...values, 'redirectToProfile': true})
        }
       })
       