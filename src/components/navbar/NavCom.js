import { Button } from "@chakra-ui/button"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"
import React from "react"

const data = [
  { path: '/', name: 'Home' },
  { path: '/add', name: 'New Question' },
  { path: '/leaderBoard', name: 'Leader Board' }]

const Navs = (props) => {
  const [location, setLocation] = React.useState(props.location.pathname)
  const handleLocation = () => {
    setTimeout(() => setLocation(props.location.pathname), 250)
  }

  return (

    <>
      {data.map((nav) =>
        <Link
          key={nav.name}
          to={nav.path}
          width='30%' height='70'
          onClick={handleLocation()}>
          <Button
            size="lg" colorScheme='teal'
            isActive={location === nav.path}
            variant='ghost' borderTopRadius='20px' borderBottomRadius="0" >
              {nav.name}
          </Button>
        </Link>

      )}

    </>
  )

}
export default withRouter(Navs)
