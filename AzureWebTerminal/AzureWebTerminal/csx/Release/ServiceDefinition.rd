<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="AzureWebTerminal" generation="1" functional="0" release="0" Id="f95cd008-72d0-41ca-904d-0fba331da989" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="AzureWebTerminalGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="AzureWebTerminalService:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/LB:AzureWebTerminalService:Endpoint1" />
          </inToChannel>
        </inPort>
        <inPort name="AzureWebTerminalStepNode:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/LB:AzureWebTerminalStepNode:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="AzureWebTerminalService:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/MapAzureWebTerminalService:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="AzureWebTerminalServiceInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/MapAzureWebTerminalServiceInstances" />
          </maps>
        </aCS>
        <aCS name="AzureWebTerminalStepNode:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/MapAzureWebTerminalStepNode:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="AzureWebTerminalStepNodeInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/MapAzureWebTerminalStepNodeInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:AzureWebTerminalService:Endpoint1">
          <toPorts>
            <inPortMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalService/Endpoint1" />
          </toPorts>
        </lBChannel>
        <lBChannel name="LB:AzureWebTerminalStepNode:Endpoint1">
          <toPorts>
            <inPortMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNode/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapAzureWebTerminalService:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalService/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapAzureWebTerminalServiceInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalServiceInstances" />
          </setting>
        </map>
        <map name="MapAzureWebTerminalStepNode:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNode/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapAzureWebTerminalStepNodeInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNodeInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="AzureWebTerminalService" generation="1" functional="0" release="0" software="C:\Users\andliu\Documents\GitHub\andliu\AzureWebTerminal\AzureWebTerminal\csx\Release\roles\AzureWebTerminalService" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;AzureWebTerminalService&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;AzureWebTerminalService&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;AzureWebTerminalStepNode&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalServiceInstances" />
            <sCSPolicyUpdateDomainMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalServiceUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalServiceFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
        <groupHascomponents>
          <role name="AzureWebTerminalStepNode" generation="1" functional="0" release="0" software="C:\Users\andliu\Documents\GitHub\andliu\AzureWebTerminal\AzureWebTerminal\csx\Release\roles\AzureWebTerminalStepNode" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="8080" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;AzureWebTerminalStepNode&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;AzureWebTerminalService&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;AzureWebTerminalStepNode&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNodeInstances" />
            <sCSPolicyUpdateDomainMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNodeUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNodeFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="AzureWebTerminalServiceUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyUpdateDomain name="AzureWebTerminalStepNodeUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="AzureWebTerminalServiceFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyFaultDomain name="AzureWebTerminalStepNodeFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="AzureWebTerminalServiceInstances" defaultPolicy="[1,1,1]" />
        <sCSPolicyID name="AzureWebTerminalStepNodeInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="97211496-096b-4a6f-bf9f-9cb6b2cb2bbb" ref="Microsoft.RedDog.Contract\ServiceContract\AzureWebTerminalContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="a10f4ed8-b9c0-4d74-a88c-05205b7d8382" ref="Microsoft.RedDog.Contract\Interface\AzureWebTerminalService:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalService:Endpoint1" />
          </inPort>
        </interfaceReference>
        <interfaceReference Id="02b14bf7-f2a0-412b-9119-03d17d2c38ee" ref="Microsoft.RedDog.Contract\Interface\AzureWebTerminalStepNode:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/AzureWebTerminal/AzureWebTerminalGroup/AzureWebTerminalStepNode:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>