export const Wrapper  = () => {
    return <Anxiety city="minsk" />
}
type PropsType = {
    city: string
}
export const Anxiety: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

/*
В коде в разных местах допущена одна и та же ошибка.
Какое слово должно быть написано вместо ошибочного?
*/