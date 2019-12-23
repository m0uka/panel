import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SetupTwoFactorModal from '@/components/dashboard/forms/SetupTwoFactorModal';

export default () => {
    const user = useStoreState((state: ApplicationStore) => state.user.data!);
    const [visible, setVisible] = useState(false);

    return user.useTotp ?
        <div>
            <p className={'text-sm'}>
                Two-factor authentication is currently enabled on your account.
            </p>
            <div className={'mt-6'}>
                <button className={'btn btn-red btn-secondary btn-sm'}>
                    Disable
                </button>
            </div>
        </div>
        :
        <div>
            <SetupTwoFactorModal visible={visible} onDismissed={() => setVisible(false)}/>
            <p className={'text-sm'}>
                You do not currently have two-factor authentication enabled on your account. Click
                the button below to begin configuring it.
            </p>
            <div className={'mt-6'}>
                <button
                    onClick={() => setVisible(true)}
                    className={'btn btn-green btn-secondary btn-sm'}
                >
                    Begin Setup
                </button>
            </div>
        </div>
    ;
};