

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, HStack, Image as ChakraImage, Input, Stack, VStack } from "@chakra-ui/react"
import { Event, getRefValue, getRefValues, set_val } from "/utils/state"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import NextHead from "next/head"



export function Input_b24088aeef9f890c69657d348332522b () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_fff9737cb37ef78949d51d21055c4ddf = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`6`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_fff9737cb37ef78949d51d21055c4ddf} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`6`}/>
  )
}

export function Input_ebc0ad3b5a2aef754a273d9adce3a307 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_28fb2cae3838a0bd751564092ef81e62 = useCallback((_e) => addEvents([Event("state.m_state.set_c", {value:`0`})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_28fb2cae3838a0bd751564092ef81e62} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`AC`}/>
  )
}

export function Input_d3dcd8efa5111047b53690b27a2db2dc () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0e4b0d5ff65390ffb3d44856fab31801 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`4`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_0e4b0d5ff65390ffb3d44856fab31801} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`4`}/>
  )
}

export function Input_8616955f0ca75e687e3cfcc0e8abd6ff () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9833cb5a85c3b9f896e356bf092562b1 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`2`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_9833cb5a85c3b9f896e356bf092562b1} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`2`}/>
  )
}

export function Input_df4aa9349dd0a52705ee3ae5651000af () {
  const state__m_state = useContext(StateContexts.state__m_state)


  return (
    <Input className={`display`} placeholder={`0`} sx={{"type": "text"}} type={`text`} value={state__m_state.c.slice(1, undefined)}/>
  )
}

export function Input_2e5a21e5f3bfd690e3d7e041591fad66 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_a811b19de8e01c3d269b9883e1d062c2 = useCallback((_e) => addEvents([Event("state.m_state.div", {})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_a811b19de8e01c3d269b9883e1d062c2} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`/`}/>
  )
}

export function Input_39a6f03c61c89267871e13ca1450ca2f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3d98c6a3a30c625d41129f2e18101465 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`5`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_3d98c6a3a30c625d41129f2e18101465} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`5`}/>
  )
}

export function Input_69fe3020bc54b52bc247cd44e7538b48 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_598bcade413f39b5b4d53caf16cc4b15 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`1`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_598bcade413f39b5b4d53caf16cc4b15} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`1`}/>
  )
}

export function Input_d623a7a06eab69d732fad2324c2072d7 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_a984014cea883e82ffeba21fc9f0cb61 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`9`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_a984014cea883e82ffeba21fc9f0cb61} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`9`}/>
  )
}

export function Input_5638b25ac9a08fafd4d4782dc05735c1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_191aeade86e9a01e90b5723c01ba4aa6 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`8`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_191aeade86e9a01e90b5723c01ba4aa6} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`8`}/>
  )
}

export function Input_aad618ff51c2e96ac8b5878b5683bdbb () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_d6135e001f6fb090297b50735a2fd57c = useCallback((_e) => addEvents([Event("state.m_state.mul", {})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_d6135e001f6fb090297b50735a2fd57c} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`*`}/>
  )
}

export function Input_f34b0d386a7c39a70e111f802a16e806 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ddf67598aac023043bc516691dc69a51 = useCallback((_e) => addEvents([Event("state.m_state.sub", {})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_ddf67598aac023043bc516691dc69a51} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`-`}/>
  )
}

export function Input_d7e364ac24e5bdbd63419460de2d223d () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_1af718c7901d859c03ea7edf349acffc = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`3`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_1af718c7901d859c03ea7edf349acffc} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`3`}/>
  )
}

export function Input_cbfb1141b3cc436c57ecc40f672daf6c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_44d1d280b6952d5054f6a94183b15a0c = useCallback((_e) => addEvents([Event("state.m_state.eq", {})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`equal`} onClick={on_click_44d1d280b6952d5054f6a94183b15a0c} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`=`}/>
  )
}

export function Input_32012d9f503a14949689e019f81abe92 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_b729801f3b1a9a083ec0a7008c040e5d = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`.`})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_b729801f3b1a9a083ec0a7008c040e5d} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`.`}/>
  )
}

export function Input_a93e9f2d2e501b1aca0b7e8efba9ef99 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3d2eec0fd6469668709e0f8b8cdf8f61 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`0`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_3d2eec0fd6469668709e0f8b8cdf8f61} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`0`}/>
  )
}

export function Input_68ea1ca9f0c1ace5bc021a6ba58c0c09 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_26b553e76a70b6aa17f2be10794c8d3b = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`7`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_26b553e76a70b6aa17f2be10794c8d3b} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`7`}/>
  )
}

export function Input_ba2627236ff9954b9814d02237c24583 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_32632d53c785704763f8a6628e74e4e9 = useCallback((_e) => addEvents([Event("state.m_state.myclick", {num:`00`})], (_e), {}), [addEvents, Event])

  return (
    <Input onClick={on_click_32632d53c785704763f8a6628e74e4e9} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`00`}/>
  )
}

export function Input_cc53f9a390bd6ad09bc192b0132640ee () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3e3c6822b497da9fc80807fa1bb519fd = useCallback((_e) => addEvents([Event("state.m_state.add", {})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_3e3c6822b497da9fc80807fa1bb519fd} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`+`}/>
  )
}

export function Input_641a8f0399cbf36a342451376d0430b3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_4cb7c753d93b23a955c24c9839d23bdf = useCallback((_e) => addEvents([Event("state.m_state.clear", {})], (_e), {}), [addEvents, Event])

  return (
    <Input className={`opr`} onClick={on_click_4cb7c753d93b23a955c24c9839d23bdf} sx={{"_hover": {"background": "lightgrey"}}} type={`button`} value={`DE`}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Stack className={`cont`}>
  <VStack className={`calc`}>
  <Box as={`form`}>
  <ChakraImage src={`/logo_darkmode.svg`} sx={{"width": "150px"}}/>
  <Stack>
  <Input_df4aa9349dd0a52705ee3ae5651000af/>
</Stack>
  <HStack>
  <Input_ebc0ad3b5a2aef754a273d9adce3a307/>
  <Input_641a8f0399cbf36a342451376d0430b3/>
  <Input_32012d9f503a14949689e019f81abe92/>
  <Input_2e5a21e5f3bfd690e3d7e041591fad66/>
</HStack>
  <HStack>
  <Input_68ea1ca9f0c1ace5bc021a6ba58c0c09/>
  <Input_5638b25ac9a08fafd4d4782dc05735c1/>
  <Input_d623a7a06eab69d732fad2324c2072d7/>
  <Input_aad618ff51c2e96ac8b5878b5683bdbb/>
</HStack>
  <HStack>
  <Input_d3dcd8efa5111047b53690b27a2db2dc/>
  <Input_39a6f03c61c89267871e13ca1450ca2f/>
  <Input_b24088aeef9f890c69657d348332522b/>
  <Input_f34b0d386a7c39a70e111f802a16e806/>
</HStack>
  <HStack>
  <Input_69fe3020bc54b52bc247cd44e7538b48/>
  <Input_8616955f0ca75e687e3cfcc0e8abd6ff/>
  <Input_d7e364ac24e5bdbd63419460de2d223d/>
  <Input_cc53f9a390bd6ad09bc192b0132640ee/>
</HStack>
  <HStack>
  <Input_ba2627236ff9954b9814d02237c24583/>
  <Input_a93e9f2d2e501b1aca0b7e8efba9ef99/>
  <Input_cbfb1141b3cc436c57ecc40f672daf6c/>
</HStack>
</Box>
</VStack>
</Stack>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
