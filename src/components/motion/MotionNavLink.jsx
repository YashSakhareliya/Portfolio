import { forwardRef } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"



const MotionNavLink = motion(
    forwardRef((props, ref) => <NavLink {...props} ref={ref} />)
)

export default MotionNavLink