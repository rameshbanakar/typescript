import React from 'react'
type positiveNumber = randomNumberProps&{
    isPositive:boolean,
    isNegetive?: never,
    isZero?:never
}
type negetiveNumber = randomNumberProps & {
    isPositive: never,
    isNegetive?: boolean,
    isZero?: never
}
type zeroNumber = randomNumberProps & {
    isPositive?: never,
    isNegetive?: never,
    isZero: boolean
}
type randomNumberProps = {
    value: number,
    isPositive?: boolean,
    isNegetive?: boolean,
    isZero?:boolean
}
export default function RandomNumber({value,isPositive,isNegetive,isZero }: randomNumberProps) {
    return (
        <div>
            {value}{isPositive&& "positive"}{isNegetive&&"negetive"}{isZero&&"zero"}
        </div>
    )
}
