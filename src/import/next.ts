/**
 * React & Next
 */
import React, { useCallback, useState, useRef, useEffect } from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export type { AppProps, ImageProps }
export { React, useCallback, useState, useRef, useEffect, Head, Image, Link, Script }

/**
 * Styled-Components
 */
import styled, { css, createGlobalStyle, ThemeProvider } from 'styled-components'

export { styled, css, createGlobalStyle, ThemeProvider }
