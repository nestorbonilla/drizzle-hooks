import React, { useState, useEffect } from 'react';
import { drizzleReactHooks } from "@drizzle/react-plugin"

const { useDrizzle } = drizzleReactHooks;

export default function MainPage() {

    const { drizzle } = useDrizzle();
    const [balance, setBalance] = useState()

    async function getBalance() {
        const balance = await drizzle.contracts.SimpleStorage.methods.get().call();
        setBalance(balance);
    }

    useEffect(() => {    
        getBalance();
    }, []);

    return balance ? (
        <div className="section">
            <h5 className="section-header info-color white-text text-center py-4">
                <strong>Read Stored Data</strong>
            </h5>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="storedData">Stored Data</label>
                        <input type="number" className="form-control" id="storedData" placeholder={balance} readOnly/>
                    </div>
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