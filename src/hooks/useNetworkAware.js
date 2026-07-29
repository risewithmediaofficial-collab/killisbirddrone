// src/hooks/useNetworkAware.js
/**
 * useNetworkAware
 * -----------------------------------------------------------------
 * Reads the Network Information API to detect slow connections.
 * Components can use this to degrade gracefully on 2G/3G/slow-2g.
 *
 * Returns:
 *   isSlow      – true when effective type is slow-2g, 2g, or 3g
 *   saveData    – true when the user has "Reduce Data Usage" enabled
 *   effectiveType – raw string: 'slow-2g' | '2g' | '3g' | '4g' | undefined
 */
import { useState, useEffect } from 'react';

const SLOW_TYPES = new Set(['slow-2g', '2g', '3g']);

const getNetworkInfo = () => {
  const conn =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (!conn) {
    // API not supported — assume fast to not degrade unnecessarily
    return { isSlow: false, saveData: false, effectiveType: undefined };
  }

  const effectiveType = conn.effectiveType;
  const saveData = conn.saveData || false;
  const isSlow = SLOW_TYPES.has(effectiveType) || saveData;

  return { isSlow, saveData, effectiveType };
};

const useNetworkAware = () => {
  const [networkInfo, setNetworkInfo] = useState(getNetworkInfo);

  useEffect(() => {
    const conn =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (!conn) return;

    const handleChange = () => setNetworkInfo(getNetworkInfo());
    conn.addEventListener('change', handleChange);

    return () => conn.removeEventListener('change', handleChange);
  }, []);

  return networkInfo;
};

export default useNetworkAware;
