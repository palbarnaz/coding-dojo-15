import { VerifiedUser } from '@mui/icons-material';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';

import Form from '../Components/Form';
import HeaderForm from '../Components/HeaderForm';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addUser, User} from '../store/modules/usersSlice';

// ./assets/images/img1.jpeg
const SignUp: React.FC = () => {
    const [emailUser, setemailUser] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [repassword, setrepassword] = useState<string>('');
    const dispatch = useAppDispatch()
    const users = useAppSelector((state)=>state.users)



    function addUsers(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

       
            const newUser: User = {
                email: emailUser,
                password
            };


            const existUser = users.users.some((item)=> item.email === newUser.email)

            if(existUser){
                alert('Usuário já cadastrado!')
                return;
            }
           
            dispatch(addUser(newUser))
            
        
       
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
                    <HeaderForm title="Sign Up" color={green[500]} icon={<VerifiedUser />} />
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

                        
                                <TextField
                                    value={repassword}
                                
                                    margin="normal"
                                    onChange={(e) => setrepassword(e.target.value)}
                                    variant="outlined"
                                    type="password"
                                    required
                                    id="repassword"
                                    label="Repeat Password"
                                    fullWidth
                                />
                            

                            <Button type="submit"  variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
                                Cadastrar
                            </Button>
                    <Grid container>
                        
                        <Grid item xs={8} textAlign="end">
                            
                                <Typography variant="body2">
                                    <Link style={{ color: 'inherit' }} to="/">
                                        Já possui conta? Vá para Login
                                    </Link>
                                </Typography>
                        
                        </Grid>
                    </Grid>
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

export default SignUp;
