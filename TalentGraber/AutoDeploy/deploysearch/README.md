1. ������Դ 

```makeresources-search.ps1 ```

2. ͨ��CustomScriptExtension����ElasticSearch 

```deploy-search.ps1 ```
    
    ��github��release page����ElasticSearch����������Դ������Щ��Դ��ѹ����������Ŀ¼�ṹ
    ```
    HappyZLService/AutoDeploy/deploysearch/ 
        elasticsearch-1.7.0.zip 
        elasticsearch-1.7.0.zip 
        elasticsearch-analysis-ik-1.4.0.zip 
        elasticsearch-jdbc-1.7.0.1-dist.zip 
        elasticsearch-jdbc.zip 
        ik.zip 
        jdk-8u45-windows-x64.exe 
        sqljdbc4.jar 
        sqljdbc41.jar 
    ```
4. ͨ��ElasticSearchִ��RebuildIndex 

```build-search-index.ps1```

5. ���뵽search cluster�ϵĻ�����������������

```schtasks /create /tn "Rebuild Index" /tr "C:\elasticsearch-jdbc-1.7.0.1\RebuildIndex.bat" /mo 10 /sc MINUTE 