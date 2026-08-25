// 飞牛NAS服务监控配置 by DSH智能体 2026-08-25
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "panglina 家庭云状态页",
  links: [
    { link: 'https://cf.panglina.ggff.net/', label: '飞牛面板', highlight: true },
    { link: 'https://wenjian.panglina.cc.cd/', label: '文件存储站' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    { id: 'fnos_panel', name: '飞牛面板(CF隧道)', method: 'GET', target: 'https://cf.panglina.ggff.net/', statusPageLink: 'https://cf.panglina.ggff.net/' },
    { id: 'wenjian_cccd', name: '文件存储站(cc.cd)', method: 'GET', target: 'https://wenjian.panglina.cc.cd/' },
    { id: 'wenjian_ccwu', name: '文件存储站(ccwu.cc)', method: 'GET', target: 'https://wenjian.panglina.ccwu.cc/' },
    { id: 'wenjian_ggff', name: '文件存储站(ggff.net)', method: 'GET', target: 'https://wenjian.panglina.ggff.net/' },
    { id: 'wechat_bridge', name: '微信桥接', method: 'GET', target: 'https://fn.panglina.ggff.net/', expectedCodes: [200, 401] },
    { id: 'docker_mirror', name: 'Docker镜像代理', method: 'GET', target: 'https://docker.panglina.ggff.net/v2/', expectedCodes: [200, 401] },
    { id: 'gh_proxy', name: 'GitHub加速', method: 'GET', target: 'https://gh.panglina.ggff.net/', expectedCodes: [200] },
  ],
}

export default { pageConfig, workerConfig }
