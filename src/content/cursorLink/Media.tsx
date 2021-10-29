type objtype = {
    url: string,
    active: boolean
}

function Media({url, active}:objtype) {
    return (
        <img className={active? "is-active" : ""} src={url} alt="" />
    )
}

export default Media
