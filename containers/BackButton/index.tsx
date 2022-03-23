import React, {useCallback} from "react";
import Button from "../../components/Button";
import {useRouter} from "next/router";

const BackButton: React.FC = () => {
    const router = useRouter();

    const onClick = useCallback(() => {
        router.back();
    }, []);

    return (
        <Button type={'button'}
                onClick={onClick}
                variants={'back'}
        >
            Back
        </Button>
    );
};

export default BackButton;
