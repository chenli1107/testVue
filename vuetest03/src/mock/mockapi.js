import * as apiList from '@/api/api_testrequest'
const Mock = require("mockjs")

Mock.mock("http://localhost:8888/cfg", "get", {"aa":"aadf","bb":"bbdf","cc":"ccdf","dd":"dddf"})
