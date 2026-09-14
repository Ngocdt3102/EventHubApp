import React from 'react';
import { View, DimensionValue } from 'react-native';

interface SpaceComponentProps {
    width?: DimensionValue;
    height?: DimensionValue;
}

const SpaceComponent = (props: SpaceComponentProps) => {
    return (
        <View
            style={{
                width: props.width ?? '100%',
                height: props.height ?? 10,
            }}
        />
    );
};

export default SpaceComponent;