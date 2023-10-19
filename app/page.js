"use client";
import SignIn from './components/SignIn'


export default function Home(props) {
  return (
    <>
      <SignIn error={props.searchParams.error} />
    </>
  )
}
