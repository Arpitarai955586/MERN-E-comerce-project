import { Typography,Grid ,Button, Link} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10 '
      container spacing={50}
      sx={{bgcolor:"black",color:"white" , py:3}}
      >
       <Grid item xs={12} sm={6} md={3} mx={4}>
        <Typography className='pb-5' variant='h6'>{" "}
            Company {" "}
        </Typography>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             About
        </Button>
        </div>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             Blog
        </Button>
        </div>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             PRESS
        </Button>
        </div>
         <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             JOBS
        </Button>
         </div>
         <div>
          PARINERS
         </div>
       </Grid>
      
       <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
             Solution
        </Typography>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             About
        </Button>
        </div>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             Blog
        </Button>
        </div>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             PRESS
        </Button>
        </div>
         <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             JOBS
        </Button>
         </div>
         <div>
          PARINERS
         </div>
       </Grid>
      
       <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
            Documentation 
        </Typography>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             About
        </Button>
        </div>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             Blog
        </Button>
        </div>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             PRESS
        </Button>
        </div>
         
       </Grid>
      
       <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
             LOGOUT
        </Typography>
        <div>
           <Button className='pb-5' variant='h6' gutterBottom>
             About
        </Button>
        </div>
      
      
       </Grid>
       <Grid className=" mx-200 mt-[-15%]" item xs={12}  >
        <Typography  variant='body2' component="p" align='center'>
             &copy;2023 My Company, All rights reserved.
        </Typography>
         <Typography  variant='body2' component="p" align='center'>
             Made with love by me.
        </Typography>
        <Link href="https://www.freepik.com" color="inherit" underline="always"> Freepik
        </Link> {' '}
          from{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always"> Freepik
        </Link> {' '}
          from{' '}

       </Grid> 
      
      </Grid>
    </div>
  )
}

export default Footer
