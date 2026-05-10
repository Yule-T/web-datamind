当页面域名为https://www.swguancha.com表示生产环境；其他情况则表示测试环境



测试接口域名：https://app-test.swguancha.com/client
生产接口域名：https://app.swguancha.com/client



获取安装包get接口：/v1/aiAppVersion/getLatestVersion?type=1
type：0=MAC-intel, 1=WINDOWS, 2=MAC-arm


响应参数：

    @ApiModelProperty("版本策略id")
    private Long id;
    @ApiModelProperty("标题")
    private String title;
    @ApiModelProperty("版本号")
    private String version;
    @ApiModelProperty("包大小")
    private String size;
    @ApiModelProperty("包地址")
    private String address;
    @ApiModelProperty("更新说明")
    private String description;
    @ApiModelProperty("是否强制更新，0-否 1-是")
    private Integer isForce;
    @ApiModelProperty("包的MD5值")
    private String hash;
    @ApiModelProperty("是否有新版本")
    private Boolean hasNewVersion;


接口返回：
{"code":0,"msg":null,"data":{"id":2,"title":"V1.1.0版本","version":"1.1.0","size":"","address":"https://swgc.obs.cn-south-1.myhuaweicloud.com/test/win/Pearl%20Setup%201.1.0.exe","description":"这里是版本描述1.1.0","time":"2026-05-06 10:24:56","type":1,"gmtCreate":"2026-05-06 10:25:03","gmtModified":"2026-05-08 11:36:31","isForce":0,"status":1,"hash":"75b7d93982f643afb429098a901803b5"},"ok":true}




我的项目是一个html+css+js的官网页，现在页面已经实现了，需要完善里面的下载功能，接口返回中的address为安装包地址，其他参数不需要使用