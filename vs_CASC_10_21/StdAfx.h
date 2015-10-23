// stdafx.h : include file for standard system include files,
//  or project specific include files that are used frequently, but
//      are changed infrequently
//

#if !defined(AFX_STDAFX_H__9E84373A_FE31_4F63_82E9_1F679878330E__INCLUDED_)
#define AFX_STDAFX_H__9E84373A_FE31_4F63_82E9_1F679878330E__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#define VC_EXTRALEAN		// Exclude rarely-used stuff from Windows headers

#include <afxwin.h>         // MFC core and standard components
#include <afxext.h>         // MFC extensions
#include <afxdisp.h>        // MFC Automation classes
#include <afxdtctl.h>		// MFC support for Internet Explorer 4 Common Controls
#ifndef _AFX_NO_AFXCMN_SUPPORT
#include <afxcmn.h>			// MFC support for Windows Common Controls
#endif // _AFX_NO_AFXCMN_SUPPORT


	#define _ATL_APARTMENT_THREADED
#include <atlbase.h>
//You may derive a class from CComModule and use it if you want to override
//something, but do not change the name of _Module
class CCASC_05Module : public CComModule
{
public:
	LONG Unlock();
	LONG Lock();
	LPCTSTR FindOneOf(LPCTSTR p1, LPCTSTR p2);
	DWORD dwThreadID;
};
extern CCASC_05Module _Module;
#include <atlcom.h>

//#define UNICODE
#ifndef ULONG_PTR
#define ULONG_PTR unsigned long*
#endif

#include "gdiplus.h"
using namespace Gdiplus;  
#pragma comment(lib, "gdiplus.lib")

#import "c:\Program Files\Common Files\System\ADO\msado15.dll" no_namespace rename("EOF","adoEOF")
//#import "c:\Program Files\Common Files\System\ADO\msado15.dll" rename_namespace("ADO") rename("EOF","adoEOF")
//#import "c:\Program Files\Common Files\System\ADO\msadox.dll" rename_namespace("ADOX")
//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_STDAFX_H__9E84373A_FE31_4F63_82E9_1F679878330E__INCLUDED_)
