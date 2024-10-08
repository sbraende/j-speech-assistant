import cmdLibrary from "../json/library.json"
import { buildSoundboard } from "./main"

const arrangmentArray = [
    ["1-1", cmdLibrary.doktor], ["1-2", cmdLibrary.sykepleier], ["1-3", cmdLibrary.medisin], ["1-4", cmdLibrary.sykehus],
    ["2-1", cmdLibrary.vondt], ["2-2", cmdLibrary.hjerte], ["2-3", cmdLibrary.vaksine], ["2-4", cmdLibrary.feber],
    ["3-1", cmdLibrary.rullestol], ["3-2", cmdLibrary.oyedraper], ["3-3", cmdLibrary.bandasje], ["3-4", cmdLibrary.sove]
]

buildSoundboard(arrangmentArray)