/** Public contact details */
export const contactInfo = {
  email: 'owusubernard050931@gmail.com',
  phone: '0202472154 / 053200315',
  linkedIn: 'https://www.linkedin.com/in/owusu-bernard050931',
  github: 'https://github.com/BraCoded02024',
}

export const cvPath = '/Bernard_Owusu_CV.pdf'

/** First number for tel: links when phone lists multiple numbers. */
export function phoneTelHref(phone) {
  const first = phone.split('/')[0]?.trim() ?? phone
  return first.replace(/\s/g, '')
}

/** Show full URL without protocol so it reads clearly as a link (e.g. www.linkedin.com/...). */
export function urlWithoutProtocol(url) {
  return url.replace(/^https?:\/\//i, '')
}
