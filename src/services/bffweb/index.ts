import { ApiBase } from '../apiBase';

const API_URL = import.meta.env.VITE_BFFWEB_API_URL || 'https://dev-apigw-orix.vimo.vn/bffweb';

const requestApi = new ApiBase({
    baseUrl: API_URL,
    isStandard: true
});

export const Get = requestApi.Get.bind(requestApi);
export const Post = requestApi.Post.bind(requestApi);
export const Put = requestApi.Put.bind(requestApi);
export const Patch = requestApi.Patch.bind(requestApi); 
export const Delete = requestApi.Delete.bind(requestApi);
export const Upload = requestApi.Upload.bind(requestApi);
export const Download = requestApi.Download.bind(requestApi);
export const GetWithAbort = requestApi.GetWithAbort.bind(requestApi);

export const PostWithAbort = requestApi.PostWithAbort.bind(requestApi);
export const PutWithAbort = requestApi.PutWithAbort.bind(requestApi);
export const PatchWithAbort = requestApi.PatchWithAbort.bind(requestApi);
export const DeleteWithAbort = requestApi.DeleteWithAbort.bind(requestApi);
export const UploadWithAbort = requestApi.UploadWithAbort.bind(requestApi);
export const DownloadWithAbort = requestApi.DownloadWithAbort.bind(requestApi);
