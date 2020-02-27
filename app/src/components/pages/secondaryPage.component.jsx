import React, { useState, useEffect } from 'react'
import { drizzleReactHooks } from "@drizzle/react-plugin"
import Swal from 'sweetalert2'

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

export default function SecondaryPage() {

    const { drizzle } = useDrizzle();
    const [balance, setBalance] = useState();
    const state = useDrizzleState(state => state);
    const stateApp = {
        storedData: 0
    };

    async function getBalance() {
        const balance = await drizzle.contracts.SimpleStorage.methods.get().call();
        stateApp['storedData'] = balance;
        setBalance(balance);
    }

    useEffect(() => {    
        getBalance();
    }, []);

    const handleChange = (e, x) => {
        stateApp[e.target.id] = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const saveStoredData = async () => {

        const transaction = await drizzle.contracts.SimpleStorage.methods
            .set(stateApp['storedData'])
            .send({from: state.accounts[0]});
        
        if(transaction.status) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Stored Data updated!',
                type: 'success',
                confirmButtonColor: '#e911bd',
            }).then(function() {
                window.location = "/";
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Opps!',
                text: 'Error updating Stored Data!',
                type: 'error',
                confirmButtonColor: '#e911bd',
            });
        }
    }

    return balance ? (
        <div className="section">
            <h5 className="section-header info-color white-text text-center py-4">
                <strong>Write Stored Data</strong>
            </h5>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="storedData">Stored Data</label>
                        <input type="number" className="form-control" id="storedData" onChange={handleChange} placeholder={balance} />
                    </div>
                    <button type="submit" className="btn btn-primary"onClick={saveStoredData}>Save</button>
                </form>
            </div>
        </div>
    ) : (
        <div className="section">
            <h5 className="section-header info-color white-text text-center py-4">
                <strong>Loading...</strong>
            </h5>
        </div>
    );
}