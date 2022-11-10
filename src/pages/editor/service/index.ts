/*
 * @Author: lee
 * @Date: 2022-11-10 15:52:20
 * @LastEditTime: 2022-11-10 16:25:15
 */
import request from "@/config/axios"

export async function assetQueryApi(data: unknown) {
  const result = await request({
    url: `${(window as any).BASE_URL}Asset/Query`,
    method: "post",
    data,
    // headers: {'X-Requested-Encrypt': 'true'},
  });

  return result;
}

export async function assetQueryApi1(params: unknown) {
  const result = await request({
    url: `${(window as any).BASE_URL}Asset/Query`,
    method: "get",
    params,
    // headers: {'X-Requested-Encrypt': 'true'},
  });
  return result;
}