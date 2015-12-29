#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.69])
AC_INIT([AzureNativeLinuxAgent], [0.1], [https://github.com/Azure/WALinuxAgent])
AM_INIT_AUTOMAKE([-Wall -Werror foreign])
AC_CONFIG_SRCDIR([src/AzureNativeLinuxAgent.cpp])
AC_CONFIG_HEADERS([config.h])

# Checks for programs.
AC_PROG_CXX
AC_PROG_CC

# Checks for libraries.

# Checks for header files.
AC_CHECK_HEADERS([arpa/inet.h netdb.h stdlib.h string.h sys/ioctl.h sys/socket.h unistd.h])

# Checks for typedefs, structures, and compiler characteristics.
AC_CHECK_HEADER_STDBOOL
AC_C_INLINE
AC_TYPE_SIZE_T

# Checks for library functions.
AC_CHECK_FUNCS([memset socket])

CXXFLAGS="$CXXFLAGS -std=c++0x"

PKG_CHECK_MODULES([LIBXML2], [libxml-2.0],,
  AC_MSG_ERROR([LIBXML2 not found.]))

PKG_CHECK_MODULES([LIBCONFIGXX], [libconfig++],,
  AC_MSG_ERROR([libconfig++ not found.]))

PKG_CHECK_MODULES([LIBCURL], [libcurl],,
  AC_MSG_ERROR([LIBCURL not found.]))

PKG_CHECK_MODULES([LIBUDEV], [libudev],,
  AC_MSG_ERROR([LIBUDEV not found.])) 

AC_CONFIG_FILES([Makefile
                 src/Makefile])

AC_OUTPUT
