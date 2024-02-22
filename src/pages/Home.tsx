import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPeople, Person } from '../store/modules/peopleSlice';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const userLogged = useAppSelector(state => state.users.userLogged)
    const dispatch = useAppDispatch();
    const peopleRedux = useAppSelector((state) => state.people)

     useEffect(()=>{
        if(!userLogged){
            navigate('/')
        }
        dispatch(getPeople())
     },[])

     
    return (
        <>
            <h1>Home</h1>
            {peopleRedux.map((people:Person)=>(
                <div key={people.url}>
                    <h2>Name: {people.name}</h2>
                    <p>Height: {people.height}</p>
                </div>
            ))}
        </>
    );
};

export default Home;
