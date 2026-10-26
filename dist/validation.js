function validateEmailAddress(value) {
  const email = String(value || '').trim();
  if (!email) return 'Enter your email address.';
  if (email.length > 254 || /\s/.test(email)) return 'Enter a valid email address, such as name@company.com.';
  const parts = email.split('@');
  if (parts.length !== 2) return 'Enter a valid email address, such as name@company.com.';
  const [local, domain] = parts;
  if (!local || local.length > 64 || local.startsWith('.') || local.endsWith('.') || local.includes('..') || !/^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+$/i.test(local)) return 'Enter a valid email address, such as name@company.com.';
  const labels = domain.split('.');
  if (labels.length < 2 || labels.some(label => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label)) || !/^[a-z]{2,63}$/i.test(labels.at(-1))) return 'Enter a valid email address, such as name@company.com.';
  return '';
}
