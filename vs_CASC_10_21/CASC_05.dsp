# Microsoft Developer Studio Project File - Name="CASC_05" - Package Owner=<4>
# Microsoft Developer Studio Generated Build File, Format Version 6.00
# ** DO NOT EDIT **

# TARGTYPE "Win32 (x86) Application" 0x0101

CFG=CASC_05 - Win32 Debug
!MESSAGE This is not a valid makefile. To build this project using NMAKE,
!MESSAGE use the Export Makefile command and run
!MESSAGE 
!MESSAGE NMAKE /f "CASC_05.mak".
!MESSAGE 
!MESSAGE You can specify a configuration when running NMAKE
!MESSAGE by defining the macro CFG on the command line. For example:
!MESSAGE 
!MESSAGE NMAKE /f "CASC_05.mak" CFG="CASC_05 - Win32 Debug"
!MESSAGE 
!MESSAGE Possible choices for configuration are:
!MESSAGE 
!MESSAGE "CASC_05 - Win32 Release" (based on "Win32 (x86) Application")
!MESSAGE "CASC_05 - Win32 Debug" (based on "Win32 (x86) Application")
!MESSAGE 

# Begin Project
# PROP AllowPerConfigDependencies 0
# PROP Scc_ProjName ""
# PROP Scc_LocalPath ""
CPP=cl.exe
MTL=midl.exe
RSC=rc.exe

!IF  "$(CFG)" == "CASC_05 - Win32 Release"

# PROP BASE Use_MFC 6
# PROP BASE Use_Debug_Libraries 0
# PROP BASE Output_Dir "Release"
# PROP BASE Intermediate_Dir "Release"
# PROP BASE Target_Dir ""
# PROP Use_MFC 6
# PROP Use_Debug_Libraries 0
# PROP Output_Dir "Release"
# PROP Intermediate_Dir "Release"
# PROP Target_Dir ""
# ADD BASE CPP /nologo /MD /W3 /GX /O2 /D "WIN32" /D "NDEBUG" /D "_WINDOWS" /D "_AFXDLL" /Yu"stdafx.h" /FD /c
# ADD CPP /nologo /MD /W3 /GX /O2 /D "WIN32" /D "NDEBUG" /D "_WINDOWS" /D "_AFXDLL" /D "_MBCS" /Yu"stdafx.h" /FD /c
# ADD BASE MTL /nologo /D "NDEBUG" /mktyplib203 /win32
# ADD MTL /nologo /D "NDEBUG" /win32
# ADD BASE RSC /l 0x804 /d "NDEBUG" /d "_AFXDLL"
# ADD RSC /l 0x804 /d "NDEBUG" /d "_AFXDLL"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
LINK32=link.exe
# ADD BASE LINK32 /nologo /subsystem:windows /machine:I386
# ADD LINK32 /nologo /subsystem:windows /machine:I386

!ELSEIF  "$(CFG)" == "CASC_05 - Win32 Debug"

# PROP BASE Use_MFC 6
# PROP BASE Use_Debug_Libraries 1
# PROP BASE Output_Dir "Debug"
# PROP BASE Intermediate_Dir "Debug"
# PROP BASE Target_Dir ""
# PROP Use_MFC 6
# PROP Use_Debug_Libraries 1
# PROP Output_Dir "Debug"
# PROP Intermediate_Dir "Debug"
# PROP Target_Dir ""
# ADD BASE CPP /nologo /MDd /W3 /Gm /GX /ZI /Od /D "WIN32" /D "_DEBUG" /D "_WINDOWS" /D "_AFXDLL" /Yu"stdafx.h" /FD /GZ /c
# ADD CPP /nologo /MDd /W3 /Gm /GX /ZI /Od /D "WIN32" /D "_DEBUG" /D "_WINDOWS" /D "_AFXDLL" /D "_MBCS" /FR /Yu"stdafx.h" /FD /GZ /c
# ADD BASE MTL /nologo /D "_DEBUG" /mktyplib203 /win32
# ADD MTL /nologo /D "_DEBUG" /win32
# ADD BASE RSC /l 0x804 /d "_DEBUG" /d "_AFXDLL"
# ADD RSC /l 0x804 /d "_DEBUG" /d "_AFXDLL"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
LINK32=link.exe
# ADD BASE LINK32 /nologo /subsystem:windows /debug /machine:I386 /pdbtype:sept
# ADD LINK32 /nologo /subsystem:windows /debug /machine:I386 /pdbtype:sept

!ENDIF 

# Begin Target

# Name "CASC_05 - Win32 Release"
# Name "CASC_05 - Win32 Debug"
# Begin Group "Source Files"

# PROP Default_Filter "cpp;c;cxx;rc;def;r;odl;idl;hpj;bat"
# Begin Source File

SOURCE=.\BmpProgressEx.cpp
# End Source File
# Begin Source File

SOURCE=.\BmpProgressEx_1.cpp
# End Source File
# Begin Source File

SOURCE=.\BmpProgressEx_2.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_011_jog.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_01_jog.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_021_auto.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_02_auto.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_03_recipe.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_041_sys_mech.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_042_sys_process.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_043_sys_soft.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_04_sys.cpp
# End Source File
# Begin Source File

SOURCE=.\CASC_05.cpp
# End Source File
# Begin Source File

SOURCE=.\CASC_05.idl
# ADD MTL /h "CASC_05_i.h" /iid "CASC_05_i.c" /Oicf
# End Source File
# Begin Source File

SOURCE=.\CASC_05.rc
# End Source File
# Begin Source File

SOURCE=.\CASC_05Dlg.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_061_aux_auto_axis.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_062_aux_set_axis.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_063_aux_auto_wash.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_06_aux.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_091_num_keyboard.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_092_char_keyboard.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_101_robot.cpp
# End Source File
# Begin Source File

SOURCE=.\Casc_200_alarm.cpp
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Pin_Dn.cpp
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Pin_Up.cpp
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Slv_Dn.cpp
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Slv_Up.cpp
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Pin_Btn_Pin_Dn.cpp
# End Source File
# Begin Source File

SOURCE=.\StdAfx.cpp
# ADD CPP /Yc"stdafx.h"
# End Source File
# Begin Source File

SOURCE=.\WriteHandler.cpp
# End Source File
# Begin Source File

SOURCE=.\WriteQueue.cpp
# End Source File
# End Group
# Begin Group "Header Files"

# PROP Default_Filter "h;hpp;hxx;hm;inl"
# Begin Source File

SOURCE=.\BmpProgressEx.h
# End Source File
# Begin Source File

SOURCE=.\BmpProgressEx_1.h
# End Source File
# Begin Source File

SOURCE=.\BmpProgressEx_2.h
# End Source File
# Begin Source File

SOURCE=.\Casc_011_jog.h
# End Source File
# Begin Source File

SOURCE=.\Casc_01_jog.h
# End Source File
# Begin Source File

SOURCE=.\Casc_021_auto.h
# End Source File
# Begin Source File

SOURCE=.\Casc_02_auto.h
# End Source File
# Begin Source File

SOURCE=.\Casc_03_recipe.h
# End Source File
# Begin Source File

SOURCE=.\Casc_041_sys_mech.h
# End Source File
# Begin Source File

SOURCE=.\Casc_042_sys_process.h
# End Source File
# Begin Source File

SOURCE=.\Casc_043_sys_soft.h
# End Source File
# Begin Source File

SOURCE=.\Casc_04_sys.h
# End Source File
# Begin Source File

SOURCE=.\CASC_05.h
# End Source File
# Begin Source File

SOURCE=.\CASC_05Dlg.h
# End Source File
# Begin Source File

SOURCE=.\Casc_061_aux_auto_axis.h
# End Source File
# Begin Source File

SOURCE=.\Casc_062_aux_set_axis.h
# End Source File
# Begin Source File

SOURCE=.\Casc_063_aux_auto_wash.h
# End Source File
# Begin Source File

SOURCE=.\Casc_06_aux.h
# End Source File
# Begin Source File

SOURCE=.\Casc_091_num_keyboard.h
# End Source File
# Begin Source File

SOURCE=.\Casc_092_char_keyboard.h
# End Source File
# Begin Source File

SOURCE=.\Casc_101_robot.h
# End Source File
# Begin Source File

SOURCE=.\Casc_200_alarm.h
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Pin_Dn.h
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Pin_Up.h
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Slv_Dn.h
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Btn_Slv_Up.h
# End Source File
# Begin Source File

SOURCE=.\D_Jog_Pin_Btn_Pin_Dn.h
# End Source File
# Begin Source File

SOURCE=.\Resource.h
# End Source File
# Begin Source File

SOURCE=.\StdAfx.h
# End Source File
# End Group
# Begin Group "Resource Files"

# PROP Default_Filter "ico;cur;bmp;dlg;rc2;rct;bin;rgs;gif;jpg;jpeg;jpe"
# Begin Source File

SOURCE=.\res\6.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bitmap1.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bitmap2.bmp
# End Source File
# Begin Source File

SOURCE=.\res\blue.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00001.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00002.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00003.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00004.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00005.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00006.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00007.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00008.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00009.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00010.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00011.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00012.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00013.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00014.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00015.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00016.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00017.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00018.bmp
# End Source File
# Begin Source File

SOURCE=.\res\bmp00019.bmp
# End Source File
# Begin Source File

SOURCE=.\res\CASC_05.ico
# End Source File
# Begin Source File

SOURCE=.\res\CASC_05.rc2
# End Source File
# Begin Source File

SOURCE=.\CASC_05.rgs
# End Source File
# Begin Source File

SOURCE=.\res\ico00001.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00002.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00003.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00004.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00005.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00006.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00007.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00008.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00009.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00010.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00011.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00012.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00013.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00014.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00015.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00016.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00017.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00018.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00019.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00020.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00021.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00022.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00023.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00024.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00025.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00026.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00027.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00028.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00029.ico
# End Source File
# Begin Source File

SOURCE=.\res\ico00030.ico
# End Source File
# Begin Source File

SOURCE=.\res\icon1.ico
# End Source File
# Begin Source File

SOURCE=.\res\icon_011.ico
# End Source File
# Begin Source File

SOURCE=.\res\icon_061.ico
# End Source File
# Begin Source File

SOURCE=.\res\icon_062.ico
# End Source File
# Begin Source File

SOURCE=.\res\pin1.bmp
# End Source File
# Begin Source File

SOURCE=.\res\pin_back.bmp
# End Source File
# Begin Source File

SOURCE=.\res\slv1.bmp
# End Source File
# End Group
# Begin Source File

SOURCE=.\ReadMe.txt
# End Source File
# End Target
# End Project
# Section CASC_05 : {0050004F-0045-0052-5400-59005F005200}
# 	1:11:IDR_CASC_05:103
# End Section
