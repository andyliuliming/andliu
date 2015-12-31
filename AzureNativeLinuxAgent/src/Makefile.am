bin_PROGRAMS = AzureNativeLinuxAgent
AzureNativeLinuxAgent_CXXFLAGS = $(LIBXML2_CFLAGS) $(LIBCONFIGXX_CFLAGS) $(LIBCURL_CFLAGS) $(LIBUDEV_CFLAGS) $(GLIBMM_CFLAGS)
AzureNativeLinuxAgent_LDADD = $(LIBXML2_LIBS) $(LIBCONFIGXX_LIBS) $(LIBCURL_LIBS) $(LIBUDEV_LIBS) $(GLIBMM_LIBS) -lcrypt 
AzureNativeLinuxAgent_SOURCES = AzureNativeLinuxAgent.cpp AzureEnvironment.cpp AgentConfig.cpp Certificates.cpp CommandExecuter.cpp CommandResult.cpp DeviceRoutine.cpp ExtensionConfig.cpp ExtensionsConfig.cpp FileOperator.cpp HostingEnvironmentConfig.cpp HttpRoutine.cpp Logger.cpp GoalState.cpp NetworkRoutine.cpp OvfEnv.cpp Provisioner.cpp SharedConfig.cpp StatusReporter.cpp StringUtil.cpp UserManager.cpp VMMStartup.cpp XmlRoutine.cpp
