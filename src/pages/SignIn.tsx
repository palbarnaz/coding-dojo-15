import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import Link from '@mui/material/Link';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderForm from '../Components/HeaderForm';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login, User } from '../store/modules/usersSlice';

// ./assets/images/img1.jpeg
const SignIn: React.FC = () => {
    const [emailUser, setemailUser] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users)

    function addUsers(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        const loginUser: User = {
            email: emailUser,
            password
        }


      const exist = users.users.some((item)=> item.email === loginUser.email && item.password === loginUser.password)

       if(exist == false){
        alert('Usuario não encontrado!')
        return;
       }

       

      dispatch(login(loginUser))

        navigate('/home')
        
    }

    return (
        <Grid container height="100vh">
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                margin="0px"
                sx={{
                    backgroundImage: ' url(https://source.unsplash.com/random)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repete',
                }}
            />
            <Grid item xs={12} sm={8} md={5}>
                <Box component="section" marginY={8} marginX={4} display="flex" flexDirection="column" alignItems="center">
                    <HeaderForm title="Sign in" color={pink[500]} icon={<LockOutlinedIcon />} />
                   
              
                     
                <Box component="form" marginTop={1} onSubmit={(e) => addUsers(e)}>
            <TextField
                value={emailUser}
                margin="normal"
                
                onChange={(e) => setemailUser(e.target.value)}
                variant="outlined"
                type="email"
                required
                id="email"
                label="E-mail"
                fullWidth
            />
            <TextField
                value={password}
                margin="normal"
                
                onChange={(e) => setpassword(e.target.value)}
                variant="outlined"
                type="password"
                required
                id="password"
                label="Password"
                fullWidth
            />

            

            <Button type="submit"  variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
                Entrar
            </Button>
            
  
                  
                </Box>
            
                    <Typography variant="body2" color="text.secondary" marginTop={5}>
                        Copyright &copy;{' '}
                        <Link color="inherit" variant="body2" href="www.growdev.com.br" target="_blank">
                            Your Website{' '}
                        </Link>
                        2023.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignIn;
